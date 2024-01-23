import DOMPurify from "dompurify";
export default function htmlPurify(html: string) {
  return DOMPurify.sanitize(html, { ALLOWED_ATTR: ["class"] });
}
