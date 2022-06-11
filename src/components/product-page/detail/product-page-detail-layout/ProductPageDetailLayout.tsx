import React, {ReactNode} from 'react';

type Props = {
  sections: ReactNode[];
};

export default function ProductPageDetailLayout({sections}: Props) {
  return (
    <div className="md:sticky md:top-[112px]">
      {sections.map((section, index) => {
        const lastIndex = index !== sections.length - 1;
        return (
          <React.Fragment key={index}>
            {section}
            {lastIndex && <hr className="my-8" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
