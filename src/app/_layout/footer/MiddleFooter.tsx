import Link from 'next/link';
import Call from '../../../../public/svg/footer/call.svg';
import Instagram from '../../../../public/svg/footer/instagram.svg';
import Linkedin from '../../../../public/svg/footer/linkedin.svg';
import Whatsapp from '../../../../public/svg/footer/whatsapp.svg';
import { ButtonAnimation } from '@/components/ButtonAnimation';

const MiddleFooter = () => {
    return (
        <div className="pb-[3rem] pt-[1.5rem] md:pb-[5.5rem] md:pt-[3.5rem] ">
            <div className="block  md:flex md:justify-between md:gap-[3.2rem] md:px-[1.5rem] lg:gap-0 lg:px-28">
                <div className="pt-[1.88rem] md:pt-0">
                    <div>
                        <h1 className="font-poppins  font-medium text-center text-small-footer-menu md:text-heading-footer ">
                            Reach Out
                        </h1>
                    </div>
                    <div className="flex flex-col  items-center pt-[0.62rem] md:block ">
                        <Link prefetch={false} href={'mailto:shaksautodetailing@gmail.com'}>
                            <div className="font-poppins font-normal pt-[0.62rem] ~text-body-medium/desktop-body hover:underline">
                                shaksautodetailing@gmail.com
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="pt-[1.88rem] md:pt-0">
                    <div>
                        <h1 className="font-poppins font-medium text-center text-small-footer-menu md:text-heading-footer">
                            Connect us
                        </h1>
                    </div>
                    <div className=" flex justify-center gap-[2.4rem] pt-[1.25rem] md:justify-between">
                        <div className="flex ">
                            <ButtonAnimation>
                                <Link href="">
                                    <Linkedin className="!size-[1.3rem]"/>
                                </Link>
                            </ButtonAnimation>
                        </div>
                        <div className="flex ">
                            <ButtonAnimation>
                                <Link href="">
                                    <Instagram className="!size-[1.3rem]"/>
                                </Link>
                            </ButtonAnimation>
                        </div>
                        <div className="flex ">
                            <ButtonAnimation>
                            {/* https://api.whatsapp.com/send?phone=+9710502686859&text=Hi. */}
                                <Link href="">
                                    <Whatsapp className="!size-[1.3rem]" />
                                </Link>
                            </ButtonAnimation>
                        </div>
                        <div className="flex ">
                            <ButtonAnimation>
                                <Link href="tel:+00000000">
                                    <Call className="!size-[1.3em]" />
                                </Link>
                            </ButtonAnimation>
                        </div>
                    </div>
                </div>
                <div className="pt-[1.88rem]  md:pt-0">
                    <div className="flex justify-center  lg:block">
                        <h1 className="font-poppins font-medium text-small-footer-menu md:text-heading-footer">Our Location</h1>
                    </div>
                    <div className="flex flex-col px-[2.5rem] pt-[1.25rem] text-center  md:block md:w-auto  md:items-center md:px-0  lg:text-start">
                        <p className="font-poppins ~text-body-medium/desktop-body">Shak &apos;s Auto Detailing, Canada</p>
                        <p className="font-poppins ~text-body-medium/desktop-body "> </p>
                        <div className="flex items-center justify-center gap-[0.5rem] md:justify-start">
                            <Link href="">
                                <h2 className="font-poppins ~text-body-medium/desktop-body hover:underline">Canada</h2>
                            </Link>
                            <div className="h-[1rem] w-[0.1rem] bg-white md:h-[1.2rem]"></div>
                            <Link href="">
                                <h2 className="font-poppins ~text-body-medium/desktop-body hover:underline"> Canada</h2>
                            </Link>
                            <div className="h-[1rem] w-[0.1rem] bg-white md:h-[1.2rem]"></div>
                            <Link href="">
                                <h2 className="font-poppins ~text-body-medium/desktop-body hover:underline">Canada</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleFooter;
