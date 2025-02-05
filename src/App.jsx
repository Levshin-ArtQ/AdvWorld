// import advWorld from './assets/advWorld.svg'
import './App.css'
import HeroSection from './frames/HeroSection'
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

      </ConfigProvider>
    </>
    
  )
}

export default App
