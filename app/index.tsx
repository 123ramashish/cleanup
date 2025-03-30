import Header from '@/components/Header';
import { Link } from 'expo-router';
import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Dimensions, Image, ImageSourcePropType } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const Index = () => {
  const width = Dimensions.get('window').width;
  const carouselRef = useRef(null);

  const serviceImages = {
    plantation: [
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' },
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' },
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' }
    ],
    cleaning: [
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' },
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' },
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' }
    ],
    animalFeeding: [
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' },
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' },
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' }
    ],
    farming: [
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' },
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' },
      { uri: 'https://media.istockphoto.com/id/1077156290/photo/people-cleaning-the-environment.jpg?s=612x612&w=0&k=20&c=XnZ7DdZ9Xo8r4rfCWicAXnSrF3QqGm58MFMidM-2z9A=' }
    ]
  };

  const renderServiceCard = (title: string, description: string, images: Array<{uri: string}>) => (
    <View className="bg-white rounded-xl shadow-md p-4 m-4">
      <Text className="text-2xl font-bold text-green-600 mb-2">{title}</Text>
      <Text className="text-gray-600 mb-4">{description}</Text>
      
      <View className="h-48 w-full">
        <Carousel
          ref={carouselRef}
          width={width - 64}
          height={180}
          autoPlay={true}
          data={images}
          scrollAnimationDuration={1000}
          renderItem={({ item }: { item: {uri: string} }) => (
            <View className="rounded-xl overflow-hidden">
              <Image 
                source={item} 
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          )}
        />
      </View>
    </View>
  );

  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-green-700 p-4">
        <Text className="text-white text-3xl font-bold text-center">
          Agricultural Services
        </Text>
        {/* <Header/> */}
      </View>
<Link href='./loader'>
<Text className='text-black'>Loader</Text>
</Link>
      {/* Main Content */}
      <View className="mt-4">
        {/* Plantation Card */}
        {renderServiceCard(
          "Plantation Services", 
          "Expert plantation management and support for sustainable agriculture.",
          serviceImages.plantation
        )}

        {/* Cleaning Card */}
        {renderServiceCard(
          "Cleanup Services", 
          "Comprehensive land and farm cleanup solutions to maintain a healthy environment.",
          serviceImages.cleaning
        )}

        {/* Animal Feeding Card */}
        {renderServiceCard(
          "Animal Feeding", 
          "Professional animal nutrition and feeding management services.",
          serviceImages.animalFeeding
        )}

        {/* Farming Card */}
        {renderServiceCard(
          "Farming Solutions", 
          "Advanced farming techniques and comprehensive agricultural support.",
          serviceImages.farming
        )}
      </View>
    </ScrollView>
  );
};

export default Index;