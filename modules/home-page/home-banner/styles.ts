import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const homeBannerWrapperCss = css`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  ${mediaQuery.tablet} {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const homeBannerContainerCss = css`
  display: flex;
  align-items: center;
  ${mediaQuery.tablet} {
    flex-direction: column;
  }
`;

export const homeBannerImgCss = css`
  height: 100vh;
  width: 100%;
  filter: brightness(0.3) saturate(2);
  position: absolute;
  inset: 0;
  z-index: -2;
  img {
    object-fit: cover;
  }
`;

export const bannerProductsImgCss = css`
  --img-height: 100px;
  height: var(--img-height);
  aspect-ratio: 1;
  scale: 11;
  transform-origin: left;
  img {
    object-fit: contain;
  }
  ${mediaQuery.miniDesktop} {
    --img-height: 65vh;
    scale: 1.5;
  }
  ${mediaQuery.tablet} {
    order: -1;
    position: static;
    --img-height: 50vh;
    scale: 1;
    transform: translate(-10%, -10vw) scale(1.2);
  }
  ${mediaQuery.mobileLandscape} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    height: 140%;
  }
`;

export const mainCss = css`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 50%;
  flex-shrink: 0;
  ${mediaQuery.miniDesktop} {
    width: 60%;
  }
  ${mediaQuery.tablet} {
    width: 100%;
    margin-bottom: var(--padding-page-mw);
  }
`;

export const bannerHeaderCss = css`
  font-size: var(--font-size-large);
  color: var(--color-bg-secondary);
  ${mediaQuery.tablet} {
    text-align: center;
    --font-size-large: 12.5vw;
  }
  ${mediaQuery.mobileLandscape} {
    --font-size-large: 6.25vw;
    text-align: left;
  }
`;

export const homeBannerBriefCss = css`
  font-weight: 400;
  margin-bottom: var(--padding-normal);
  line-height: var(--line-height-small);
  font-size: var(--font-size-icon);
  ${mediaQuery.tablet} {
    width: 100%;
    font-size: var(--font-size-small);
    text-align: center;
  }
  ${mediaQuery.mobileLandscape} {
    font-size: var(--font-size-default);
    text-align: left;
    width: 60%;
    margin-bottom: var(--padding-small);
  }
`;

export const bannerCtaContainerCss = css`
  display: flex;
  gap: var(--padding-mid);
  align-items: center;
  .cta-info {
    font-size: var(--font-size-icon);
  }
  ${mediaQuery.tablet} {
    flex-direction: column;
    .cta-info {
      text-align: center;
      font-size: var(--font-size-small);
    }
  }
  ${mediaQuery.mobileLandscape} {
    gap: 0;
    flex-direction: row;
    .cta-info {
      font-size: var(--font-size-default);
    }
  }
`;

export const bannerCtaBtnCss = css`
  font-size: var(--font-size-small);
  flex-shrink: 0;
  ${mediaQuery.tablet} {
    font-size: var(--font-size-default);
  }
  ${mediaQuery.mobileLandscape} {
    transform: scale(0.6);
  }
`;
