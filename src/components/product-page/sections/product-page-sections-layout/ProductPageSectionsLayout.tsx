import React, {ReactNode} from 'react';

type Props = {
  sections: ReactNode[];
};

const ProductPageSectionsLayout = ({sections}: Props) => {
  return (
    <div>
      {sections.map((section, index) => {
        return (
          <React.Fragment key={index}>
            <hr className="my-10" />
            <div className="max-w-[704px] mx-auto">{section}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProductPageSectionsLayout;
