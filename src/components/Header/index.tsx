import { Button } from '../Button/text';
import { ButtonUnstyled } from '../Button/unstyled';

export const Header = () => {
    return (
        <header>
            <nav className="flex w-full mx-auto items-center justify-between py-4 px-4 lg:px-6">
                <div className="flex">
                    <ButtonUnstyled
                        to="/"
                        ariaLabel="Home"
                    >
                        <p className="font-semibold text-xl text-left">Notion Time Machine</p>
                    </ButtonUnstyled>
                </div>
                <div className="flex justify-end shrink-0">
                    <Button to="/#telecharger">Join the beta</Button>
                </div>
            </nav>
        </header>
    );
};
