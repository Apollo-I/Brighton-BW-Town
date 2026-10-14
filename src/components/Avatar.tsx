'use client';

import { useState } from 'react';
import { initialsOf } from '@/components/ui';

/**
 * Circular portrait with a dignified fallback: if the image fails to load or
 * is missing, the person's initials are shown instead. Never renders a
 * substitute portrait.
 */
export function Avatar({
  src,
  fullName,
  size = 72,
}: {
  src: string | null;
  fullName: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <span
      className="avatar"
      style={{ width: size, height: size, fontSize: size * 0.19 }}
      aria-hidden="true"
    >
      {showImage ? (
        <img
          src={src as string}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        initialsOf(fullName)
      )}
    </span>
  );
}
