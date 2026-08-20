"use client"

import { useEffect, useRef } from "react"

// --- Editar aqui ------------------------------------------------------------
// Gradiente resolvido em pontos de bitmap, tipo meio-tom de impressao.
// Desenha uma vez e so redesenha no resize. Nao ha loop de animacao.
const PIXEL = 3 // tamanho de cada ponto em CSS px (maior = mais chunky)
const FALLOFF = 2.1 // curva do gradiente (maior = decai mais rapido)
const REACH = 0.72 // ate onde o gradiente chega, em fracao da tela
const MAX_DENSITY = 0.82 // teto de densidade: impede o canto virar roxo solido
// ---------------------------------------------------------------------------

// Bayer 8x8 ordenado: da a textura de meio-tom em vez de ruido aleatorio.
const BAYER = [
  0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54,
  22, 3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25, 15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29,
  53, 21,
]

interface DitherGradientProps {
  /** Opacidade final da camada. */
  opacity?: number
  /** Cor dos pontos em [r, g, b]. Default: accent do tema. */
  color?: [number, number, number]
  className?: string
}

export function DitherGradient({ opacity = 0.5, color = [169, 85, 247], className }: DitherGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const [r, g, b] = color
    let frame = 0

    const draw = () => {
      const w = Math.max(1, Math.ceil(canvas.offsetWidth / PIXEL))
      const h = Math.max(1, Math.ceil(canvas.offsetHeight / PIXEL))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }

      const image = ctx.createImageData(w, h)
      const data = image.data

      for (let y = 0; y < h; y++) {
        // Distancia normalizada ate o canto inferior direito
        const dy = (h - 1 - y) / h
        for (let x = 0; x < w; x++) {
          const dx = (w - 1 - x) / w
          const dist = Math.sqrt(dx * dx + dy * dy)

          let t = 1 - dist / REACH
          t = t <= 0 ? 0 : Math.pow(t, FALLOFF)
          if (t > MAX_DENSITY) t = MAX_DENSITY

          const threshold = (BAYER[(y & 7) * 8 + (x & 7)] + 0.5) / 64
          if (t > threshold) {
            const i = (y * w + x) * 4
            data[i] = r
            data[i + 1] = g
            data[i + 2] = b
            data[i + 3] = 255
          }
        }
      }

      ctx.putImageData(image, 0, 0)
    }

    const scheduleDraw = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener("resize", scheduleDraw)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", scheduleDraw)
    }
  }, [color])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        imageRendering: "pixelated",
        opacity,
      }}
    />
  )
}
