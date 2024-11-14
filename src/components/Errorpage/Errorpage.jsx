import { useNavigate } from 'react-router-dom';
import err from '../../assets/images/404.png'
import { Helmet } from 'react-helmet';
const Errorpage = () => {
    const navigate = useNavigate();
  return (
    <div className="hero bg-white min-h-screen">
      <Helmet>
        <title>{'Error 404'}</title>
      </Helmet>
      <div className="hero-content text-center">
        <div className="max-w-md">
            <img className='w-96 mb-8' src={err} alt="" />
          <h1 className="text-5xl font-bold mb-5">Page <span className='text-[#F3445A]'>Not</span> Found</h1>
          <button onClick={() => navigate(-1)} className="btn border-1 bg-white txtcolor border-[#f3445a] hover:bg-[#f3445a] hover:text-white">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
