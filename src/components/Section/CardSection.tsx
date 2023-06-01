import { ReactNode } from 'react';

interface CardSectionProps {
    children: ReactNode;
    gap?: number;
    marginTop?: number;
}

export const CardSection = ({ children, gap = 10, marginTop = 16 }: CardSectionProps) => {
    return (
        <div
            className={`container max-w-4xl mx-auto flex flex-col sm:flex-row pb-8 pt-${marginTop} px-4 lg:px-0 gap-${gap}`}
        >
            {children}
        </div>
    );
};
