export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date)
}

export const isSubpost = (id: string) => id.includes("/")

export const subpostSlug = (id: string) => id.split("/")[1]

export const normalizePath = (pathname: string) => {
  try {
    return decodeURIComponent(pathname).replace(/\/+$/, "")
  } catch {
    return pathname.replace(/\/+$/, "")
  }
}

export const withBase = (path: string) => {
  if (/^(?:[a-z][a-z\d+\-.]*:|#)/i.test(path)) return path

  const base = import.meta.env.BASE_URL
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base

  return path.startsWith("/") ? `${cleanBase}${path}` : `${base}${path}`
}

export const withoutBase = (pathname: string) => {
  const cleanBase = import.meta.env.BASE_URL.replace(/\/$/, "")
  if (!cleanBase || cleanBase === "/") return pathname
  return pathname === cleanBase
    ? "/"
    : pathname.startsWith(`${cleanBase}/`)
      ? pathname.slice(cleanBase.length)
      : pathname
}

export const hashId = (hash: string) => decodeURIComponent(hash.slice(1))
