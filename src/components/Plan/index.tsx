import { Link } from 'gatsby';
import { ArrowRight } from 'gthibaud-icons-react';
import { ReactNode } from 'react';
import { Button } from '../Button/text';
import { TiltingContainer } from '../Container/Titling';
import { Body } from '../Typography/Body';
import { CardTitle } from './Title';

type PlanProps = {
    image: ReactNode;
    title: string;
    description: string;
    price: string;
    to: string;
};

export const Plan = ({ image, title, description, price, to }: PlanProps) => {
    return (
        <TiltingContainer className="flex-1">
            <Link to={to}>
                <div className="flex flex-1 flex-col items-center gap-4 text-center bg-surfaceSecondary p-8 pb-6 rounded-xl">
                    <CardTitle>{title}</CardTitle>
                    {image}
                    <Body>{description}</Body>
                    <CardTitle>{price}</CardTitle>
                    <Button
                        className="w-full bg-paletteBlue rounded-lg"
                        to={to}
                    >
                        <span>
                            Get Started
                            <ArrowRight className="fill-surfacePrimary mb-1" />
                        </span>
                    </Button>
                </div>
            </Link>
        </TiltingContainer>
    );
};
