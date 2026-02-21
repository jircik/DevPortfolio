export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-2">
        <p className="text-xs text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} Arthur Jircik. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
