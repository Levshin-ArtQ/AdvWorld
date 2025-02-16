// import advWorld from './assets/advWorld.svg'
import './App.css'
import HeroSection from './frames/HeroSection'
import ReasonsVisiting from './frames/ReasonsVisiting'
import { ConfigProvider } from 'antd'



function App() {
  

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              arrowOffset: 20,
              arrowSize: 50,
              /* here is your component tokens */
            },
          },
        }}
      >
      <HeroSection />
      <ReasonsVisiting />

      </ConfigProvider>
    </>
    
  )
}

export default App
