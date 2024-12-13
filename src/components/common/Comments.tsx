import React from 'react';
import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <Giscus
      repo="[REPO]"
      repoId="[REPO_ID]"
      category="Comments"
      categoryId="[CATEGORY_ID]"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
    />
  );
}