import { CutCornerButton } from "../components/CutCornerButton";


export const HeaderSection = () => {
    return (
        <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-40">
            <div className="container">
                <div className="flex justify-between items-center h-24">
                    <div>
                        <img src="/assets/images/logo.svg" alt="logo" />
                    </div>

                    <div className="flex gap-4 items-center">

                        {/* The get started button beside menu icon */}
                        <CutCornerButton className="hidden md:inline-flex">Get Started</CutCornerButton>

                        {/* The menu icon bars */}
                        <div className="size-10 relative">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
                            </div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </header>
    );
};