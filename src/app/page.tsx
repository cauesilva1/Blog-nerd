import { Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Separator from './components/separetor';
import ButtonComponent from './components/button';


export default function Home() {
  return (
    <main className="flex w-screen h-screen min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col w-3/4 h-3/4 max-[780px]:w-64 max-[780px]:h-4/5 justify-between items-center bg-[#272727] rounded-xl">
        <Text style={{marginTop: '2rem', fontSize: '40px' , color: 'white', width: '100%', display: 'flex', justifyContent: 'center' }}> Blog nerd</Text>

        <Separator />


        <h3 className='mt-2 mb-2 text-[40px] text-white w-4/5 flex justify-center items-center text-center max-[780px]:text-base'> Aqui voçe ira encontrar a melhor comunidade nerd/dev entre agora nessa gigantesca comunidade!.</h3>



        <div className=' w-3/4  flex items-center justify-center gap-96 mt-12 mb-10 max-[780px]:flex-col max-[780px]:gap-2 '>

        <ButtonComponent ContentButton='Login' Link='/Login' />

        <ButtonComponent ContentButton='Register' Link='/Register'  />

        
        </div>
      </div>
    </main>
  )
}
