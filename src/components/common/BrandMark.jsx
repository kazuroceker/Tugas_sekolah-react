export default function BrandMark({ className = "brand-mark" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#8C907E" />
      <path d="M32 13 10 24l22 11 18-9v13h4V24L32 13Z" fill="#F1F1F0" />
      <path
        d="M18 34v9c0 5 6.3 9 14 9s14-4 14-9v-9l-14 7-14-7Z"
        fill="#F1F1F0"
      />
    </svg>
  );
}
