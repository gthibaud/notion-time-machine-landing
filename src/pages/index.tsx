import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { LockDesktop, LockShield, Sparkles } from 'gthibaud-icons-react';
import { Toaster } from 'react-hot-toast';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { TiltingContainer } from '../components/Container/Titling';
import { EmailForm } from '../components/EmailForm';
import { FAQ } from '../components/FAQ';
import { Feature } from '../components/Feature';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Plan } from '../components/Plan';
import { Problem } from '../components/Problem';
import { CardSection } from '../components/Section/CardSection';
import { PlanSection } from '../components/Section/PlanSection';
import { BigTitle } from '../components/Typography/BigTitle';
import { Body } from '../components/Typography/Body';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FFFFFF';

const Main = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Making your Notion data safe</BigTitle>
                <SubTitle>
                    <span>
                        We backup your Notion workspaces
                        <br />
                        to secure things that matter
                        <Sparkles className="fill-palettePurple" />
                    </span>
                </SubTitle>
                <div className="flex justify-center px-4 mt-8">
                    <TiltingContainer>
                        <StaticImage
                            className="max-w-screen-lg"
                            src="../../static/images/desktop.png"
                            alt="Desktop Klipse interface."
                        />
                    </TiltingContainer>
                </div>
                <SectionTitle>
                    <span>
                        Secure things that matter
                        <LockShield className="fill-paletteRed" />
                    </span>
                </SectionTitle>
                <SubTitle>
                    Would you be able to keep your business running if you lost access to Notion
                    tomorrow morning?
                </SubTitle>
                <CardSection>
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/bulb.jpg"
                                alt="Bulb image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Crucial data"
                        description="Your best ideas are stored in Notion, perhaps even your customers, contracts, strategy."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/coffee.jpg"
                                alt="Coffee image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Critical risk"
                        description="Mistakes can happen: deleting an access, forgetting to renew a license: 0 risk don’t exists."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/error.jpg"
                                alt="Error image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Don’t depend on Notion"
                        description="Don't let your business, your studies or your life depend on Notion, mitigate the risk."
                    />
                </CardSection>
                <SectionTitle>
                    <span>
                        We backup every page in a secure vault
                        <LockDesktop className="fill-paletteBlue" />
                    </span>
                </SectionTitle>
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/clock.jpg"
                            alt="Clock image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Automated backups, simple as that"
                    description={
                        <>
                            Connect your workspace to Notion Time Machine and that's it! We'll take
                            care of backing up all your data at regular intervals, and alert you if
                            an error occurs.
                        </>
                    }
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/files.jpg"
                            alt="Files image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="High-level safety and resilience "
                    description="Notion Time Machine encrypts all backups and exchanges between Notion APIs and our system. We offer AES-256 encryption for all backups, making it impossible for us to decrypt them, even by us."
                    inversedDirection
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/computer.jpg"
                            alt="Computer image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Manage backups, restore data anytime"
                    description="Thanks to the administration portal, you can define your backup and data retention strategies. In the blink of an eye, you can view your backups, go back in time and restore older versions."
                />
                <SectionTitle>Our plans</SectionTitle>
                <SubTitle>
                    No commitments or hidden costs,
                    <br /> we have plans for everyone!
                </SubTitle>
                <br />
                <PlanSection>
                    <Plan
                        to="/#download"
                        title="Monthly backup"
                        image={
                            <StaticImage
                                src="../../static/images/monthly.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Ideal for individuals, students, or families that want to stay zen"
                        price="2$ / month"
                    />
                    <Plan
                        to="/#download"
                        title="Weekly backup"
                        image={
                            <StaticImage
                                src="../../static/images/weekly.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Ideal for startups who take care of their data on a limited budget"
                        price="5$ / month"
                    />
                    <Plan
                        to="/#download"
                        title="Daily backup"
                        image={
                            <StaticImage
                                src="../../static/images/daily.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Ideal for SME that must guarantee high levels of service"
                        price="10$ / month"
                    />
                </PlanSection>
                <SectionTitle>
                    <span>
                        Join Notion Time Machine beta!
                        <Sparkles className="fill-palettePurple" />
                    </span>
                </SectionTitle>
                <div id="download">
                    <Columns columnsNumber={2}>
                        <div className="flex flex-col flex-1 gap-6">
                            <Body>
                                Be the first to benefit from access to Notion Time Machine by
                                joining the waiting list.
                            </Body>
                            <EmailForm />
                        </div>
                        <div className="flex-1">
                            <TiltingContainer>
                                <StaticImage
                                    src="../../static/images/relax.png"
                                    alt="Zen image"
                                    width={460}
                                    placeholder="none"
                                    backgroundColor={BACKGROUND_DEFAULT}
                                />
                            </TiltingContainer>
                        </div>
                    </Columns>
                </div>
                <SectionTitle>Plus d'informations</SectionTitle>
                <FAQ
                    question="Quels types d'exercices propose Klipse ?"
                    answer="Klipse offre des exercices rapides (< 5 minutes) basés sur le yoga des yeux. Ces exercices permettent de réduire la fatigue oculaire, hydrater les yeux et de retrouver une clarté d'esprit. Ils peuvent être pratiqués à tout moment de la journée (au réveil, au milieu d'une session de travail, le soir, etc.)."
                />
                <FAQ
                    question="Est-ce que Klipse peut améliorer ma vue ?"
                    answer="Non, Klipse ne peut pas améliorer votre vue, mais les exercices détendent vos yeux et entraînent vos muscles. Si vous souffrez de troubles visuels, consultez un ophtalmologue ou un orthoptiste."
                />
                <FAQ
                    question="Comment télécharger l'application ?"
                    answer={
                        <>
                            L'application est en cours de développement. Inscrivez-vous à notre{' '}
                            <u>
                                <Link to="/#download">liste d'attente</Link>
                            </u>{' '}
                            pour être informé de sa sortie.
                        </>
                    }
                />
                <FAQ
                    question="Combien coûte Klipse ?"
                    answer="Klipse est une application totalement gratuite. Nous prévoyons d'ajouter des fonctionnalités payantes à l'avenir (synchronisation de comptes, etc.)."
                />
                <FAQ
                    question="Qui se cache derrière le projet ?"
                    answer={
                        <>
                            Klipse est développé par Creastel Labs, un projet mené par Grégoire
                            Thibaud et Jean Haberer. N'hésitez pas à nous{' '}
                            <u>
                                <a href="mailto:gregoire@creastel.com">contacter</a>
                            </u>{' '}
                            pour en savoir plus.
                        </>
                    }
                />
            </MainContainer>
            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
};

export default Main;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="fr" />
        <title>Klipse – Vos yeux méritent d'être entraînés</title>
        <meta
            name="description"
            content="Klipse est une application qui vous aide à prendre soin de vos yeux. Retrouvez le focus avec des exercices simples sur votre téléphone ou votre ordinateur."
        />
        <meta charSet="utf-8" />
    </>
);
