import Image from "next/image";
import classNames from "@calcom/lib/classNames";

type Maybe<T> = T | null | undefined;

export type OrgBannerProps = {
  alt: string;
  width?: number;
  height?: number;
  imageSrc?: Maybe<string>;
  fallback?: React.ReactNode;
  className?: string;
  "data-testid"?: string;
};

export function OrgBanner(props: OrgBannerProps) {
  const { imageSrc, alt, width = 1500, height = 500 } = props;

  if (!imageSrc) {
    return <div className={classNames("bg-muted", props.className)}>{props.fallback}</div>;
  }

  // Use regular img tag in development/preview environment
  if (process.env.NODE_ENV !== 'production') {
    return (
      <img
        data-testid={props?.["data-testid"]}
        src={imageSrc}
        alt={alt}
        className={props.className}
        width={width}
        height={height}
      />
    );
  }

  return (
    <Image
      data-testid={props?.["data-testid"]}
      src={imageSrc}
      alt={alt}
      className={props.className}
      width={width}
      height={height}
    />
  );
}