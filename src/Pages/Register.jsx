import { Link, useLocation, useNavigate } from 'react-router'; 
import { Mail, Lock, Gamepad2, UserRoundPen, ImagePlus, Dog, UserRound } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';

export default function Register() {
    const { registerWithEmailPassword, setUser } = useContext(AuthContext);
    const [upazilas, setUpazilas] = useState([])
    const [districts, setDistricts] = useState([])
    const [upazila, setUpazila] = useState('')
    const [district, setDistrict] = useState('')

    
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(()=>{
      axios.get('../upazila.json')
      .then(res => setUpazilas(res.data.upazilas))
      axios.get('../district.json')
      .then(res => setDistricts(res.data.districts))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const pass = e.target.password.value;
        const photoUrl = e.target.photoUrl;
        const file = photoUrl.files[0]
        const name = e.target.name.value.trim();
        const blood = e.target.blood.value.trim();

        
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;

        if (pass.length < 6) {
            return toast.warn("Password must be at least 6 characters!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
        }
        if (!uppercase.test(pass)) {
            return toast.warn("Password must have at least one uppercase letter!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            }); 
        }
        if (!lowercase.test(pass)) {
            return toast.warn("Password must have at least one lowercase letter!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
        }

        const res = await axios.post(`https://api.imgbb.com/1/upload?key=c0c2a675182aff9fe924c451f808e65a`, {image:file},
             {
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            })

        const mainPhotoUrl = res.data.data.display_url

        const formData = {
                email,
                pass,
                name,
                mainPhotoUrl,
                blood,
                district,
                upazila
        }

   
        try {
           
            const userCredential = await registerWithEmailPassword(email, pass);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: name,
                photoURL: mainPhotoUrl || null
            });

            setUser(user);
            axios.post('https://donatebloodserver.vercel.app/users', formData)
            .then(res => {console.log(res.data)})
            .catch(err => console.log(err))

            const redirectTo = location.state?.from?.pathname || '/';
            navigate(redirectTo, { replace: true });

        } catch (err) {
            console.error("Registration failed:", err);
            alert(err.message || "Failed to register. Try again.");
        }
    };

    
  return (
    <div className="bg-gray-50 relative flex items-center justify-center px-4 py-12">
          
      <title>Register an Account</title>
      
      <div className="absolute inset-0"/>
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-40">
        
          <div className="text-center lg:text-left max-w-lg flex items-center">
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-red-500 tracking-tight">
              <span className='text-black'>Someone</span> Might Be Needing Blood<span className='text-black'> At this very moment</span>
            </h1>
          </div>
          <div className="w-full max-w-md">
            <div className="bg-linear-to-b from-sky-900 to-black backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Register an Account
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <Mail className="w-5 h-5" />
                    Email Address
                  </label>
                  <input name='email'
                    type="email"
                    placeholder="friend@domain.com"
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <UserRoundPen className="w-5 h-5" />
                    Full Name
                  </label>
                  <input name='name'
                    type="text"
                    placeholder="First Name + Last Name"
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <ImagePlus className="w-5 h-5" />
                    PhotoURL
                  </label>
                  <input name='photoUrl'
                    type="file"
                    placeholder="https://yourphoto/"
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <UserRound className="w-5 h-5" />
                    Blood Group
                  </label>
                  <select name='blood' defaultValue="Choose Blood Group" className=" w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-purple-500/20 transition-all">
                    <option disabled={true}>Choose Blood Group</option>
                    <option value='A+'>A+</option>
                    <option value='A-'>A-</option>
                    <option value='B+'>B+</option>
                    <option value='B-'>B-</option>
                    <option value='O+'>O+</option>
                    <option value='O-'>O-</option>
                    <option value='AB+'>AB+</option>
                    <option value='AB-'>AB-</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <UserRound className="w-5 h-5" />
                    Select District
                  </label>
                  <select value={district} onChange={(e) => setDistrict(e.target.value)} className=" w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-purple-500/20 transition-all">
                    <option disabled selected value=''>Select Your District</option>
                    {
                      districts.map(d => <option value={d?.name} key={d.id}>{d?.name}</option>)
                    }
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <UserRound className="w-5 h-5" />
                    Select Upazila
                  </label>
                  <select value={upazila} onChange={(e) => setUpazila(e.target.value)} className=" w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-purple-500/20 transition-all">
                    <option disabled value=''>Select Your Upazila</option>
                    {
                      upazilas.map(u => <option value={u?.name} key={u.id}>{u?.name}</option>)
                    }
                  </select>
                </div>



                <div>
                  <label className="flex items-center gap-3 text-gray-300 mb-2 text-sm font-medium">
                    <Lock className="w-5 h-5" />
                    Password
                  </label>
                  <input name='password'
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <div className="flex justify-center flex-col sm:flex-row items-center gap-4 text-sm">
                  
                  <Link to="/login" className="text-sky-500 hover:text-white transition-colors">
                    Already have an account? <span className="font-bold">Sign In</span>
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-6 bg-linear-to-r from-sky-700 to-sky-500 hover:bg-sky-900 rounded-xl font-bold text-lg text-white shadow-xl transform transition-all hover:scale-[1.02] active:scale-100"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}