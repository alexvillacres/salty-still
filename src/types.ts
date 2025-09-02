
import type { ImageMetadata } from 'astro';

export type ImageItem = {
    id: string;
    src: ImageMetadata;
    alt: string;
    colSpan?: number;
    rowSpan?: number;
  };