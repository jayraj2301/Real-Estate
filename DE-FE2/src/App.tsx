import {Route,Routes} from 'react-router-dom';
import AuthLayout from './authentication/AuthLayout';
import Signin from './authentication/Signin';
import Signup from './authentication/Signup';
import RootLaayout from './root/RootLaayout';
import { Toaster } from "@/components/ui/toaster"
import {Home,Profile,Properties,About,AddProperty,Contact} from './root/pages';
import {PropertyPreview} from './root/pages/PropertyPreview';


export default function App() {
  return (
    <main className='h-screen flex custom-scrollbar'>
      <Routes>
        {/* public */}
          <Route element={<AuthLayout />}>
            <Route path='/sign-in' element={<Signin />} />
            <Route path='/sign-up' element={<Signup />} />
          </Route>

        {/* private */}
          <Route element={<RootLaayout />}>
            <Route index element={<Home />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/properties' element={<Properties />} />
            <Route path='/add-properties' element={<AddProperty />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/property/:id' element={<PropertyPreview />} />
          </Route>
      </Routes>
      <Toaster />
    </main>
  )
}