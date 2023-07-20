import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Image01 from '../assets/01.png';
import Image02 from '../assets/02.png';
import Image03 from '../assets/03.png';
import { useNavigation } from '@react-navigation/native';


const OnboardingScreen = () => {
    const navigation = useNavigation();

    const DoneButtonComponent = () => {
        return (
                <View style={{marginRight:10}} >
                    <Text style={{ textAlign: 'right',fontWeight:'bold' }} onPress={()=>navigation.replace("Home")}>Done</Text>
                </View>
        )
    }

    return (
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={Image01} />,
                        title: 'Streamlined Invoicing',
                        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim metus. Nullam varius velit finibus ex lacinia aliquet. ',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={Image02} />,
                        title: 'Your First invoice',
                        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim metus. Nullam varius velit finibus ex lacinia aliquet. ',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={Image03} />,
                        title: 'Do your charge tax?',
                        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim metus. Nullam varius velit finibus ex lacinia aliquet. ',
                    }
                ]}
                showNext={true}
                onSkip={() => navigation.replace("Home")}
                flatlistProps={{ viewabilityConfig: undefined }}
                controlStatusBar={false}
                DoneButtonComponent={DoneButtonComponent}
                titleStyles={{fontWeight:'bold'}}
                subTitleStyles={{fontSize:14,marginTop:5}}
                imageContainerStyles={{paddingBottom:20}}
            />
    )
}

export default OnboardingScreen