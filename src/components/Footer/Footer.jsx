import logo from '../../assets/images/headphones.png'
const Footer = () => {
    return (
        <footer className='w-full'>
            <div className='mx-auto p-16'>
                <div className='flex flex-col justify-center items-center mx-auto text-center gap-4'>
                    <img className='w-16' src={logo} alt="" />
                    <h1 className='md:text-5xl text-2xl font-bold'>Your <span className='text-[#F3445A]'>Gadget</span></h1>
                    <p className='text-slate-600'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <br />
                <hr />
                <div className='flex md:flex-row flex-col justify-center items-center text-center mt-6'>
                    <div className='flex flex-col text-center gap-1 md:w-1/3 mb-4'>
                        <h2 className='md:text-xl font-bold'>Services</h2>
                        <a className='text-slate-600' href="">Product Support</a>
                        <a className='text-slate-600' href="">Order Tracking</a>
                        <a className='text-slate-600' href="">Shipping & Delivery</a>
                        <a className='text-slate-600' href="">Returns</a>
                    </div>
                    <div className='flex flex-col text-center gap-1 md:w-1/3 mb-4'>
                        <h2 className='md:text-xl font-bold'>Company</h2>
                        <a className='text-slate-600' href="">About Us</a>
                        <a className='text-slate-600' href="">Careers</a>
                        <a className='text-slate-600' href="">Contact</a>
                    </div>
                    <div className="flex flex-col text-center gap-1 md:w-1/3">
                    <h2 className="md:text-xl font-bold">Legal</h2>
                    <a href="" className="text-slate-600">Terms of Service</a>
                    <a href="" className="text-slate-600">Privacy Policy</a>
                    <a href="" className="text-slate-600">Cookies Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;