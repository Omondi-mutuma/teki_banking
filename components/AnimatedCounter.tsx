"use client"
import CountUp from 'react-countup'

const AnimatedCounter = ( {amount}: {amount: number} ) => {
  return (
    <div>
        <CountUp end={amount} 
            decimals={2}
            decimal='.'
            prefix='Ksh ' 
        />
    </div>
  )
}

export default AnimatedCounter