import { ImageResponse } from "next/og";
import { SocialCardContent } from "@/lib/socialCard";
import { COMPANY } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${COMPANY.name} — Family-Owned Concrete Contractor Serving Greater Nashville`;

export default function Image() {
  return new ImageResponse(<SocialCardContent />, { ...size });
}
