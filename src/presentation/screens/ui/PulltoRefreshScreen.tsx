import React, { useContext, useState } from 'react';
import { CustomView, Title } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native';
import { globalStyles } from '../../../config';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (

    <CustomView>

      <ScrollView
        style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            progressViewOffset={top}
            onRefresh={onRefresh}
            colors={ [colors.primary] }
            tintColor={colors.primary}
          />
        }
      >
        <Title text={'Pull to refresh screen'} safe></Title>



      </ScrollView>
    </CustomView>
  );
};