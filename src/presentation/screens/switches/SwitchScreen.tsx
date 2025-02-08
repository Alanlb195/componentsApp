import { useState } from 'react';
import { CustomSwitch, CustomView, Card, Title } from '../../components/index'
import { Separator } from '../../components/ui/Separator';

export const SwitchScreen = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })

  return (
    <CustomView margin>
      <Title text='Switches screen' safe={true} />
      <Card>


        <CustomSwitch
          isOn={state.isActive}
          onChange={value => setState({ ...state, isActive: value })}
          text='is active?'
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => setState({ ...state, isHungry: value })}
          text='are you hungry?'
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState({ ...state, isHappy: value })}
          text='are you happy?'
        />


      </Card>
    </CustomView>
  )
}
