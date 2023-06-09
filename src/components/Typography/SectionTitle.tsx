import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
};

export const SectionTitle = ({ children }: TitleProps) => {
    return (
        <h2 className="text-3xl text-primary font-semibold text-center mt-20 mb-10">{children}</h2>
    );
};
