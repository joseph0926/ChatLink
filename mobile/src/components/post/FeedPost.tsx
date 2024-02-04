import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors} from '../../../src/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './FeedPost.style';

const FeedPost = () => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
          }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>LeoMessi</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDot}
        />
      </View>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name="heart"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>sdafsd</Text> and{' '}
          <Text style={styles.bold}>66 others</Text>
        </Text>
        <View style={styles.postText}>
          <Text style={styles.text}>
            <Text style={styles.bold}>askjdkasjdlajs </Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            facere nostrum deserunt rem facilis id consequuntur quasi harum
            necessitatibus, non ut totam! Eos dolores ullam nemo. Quidem totam
            quos qui!
          </Text>
          <Text>View all 16 comments</Text>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              <Text style={styles.bold}>qweqweqw </Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              facere nostrum deserunt
            </Text>
            <AntDesign name="hearto" style={styles.icon} color={colors.black} />
          </View>
        </View>
        <Text>24 February, 2024</Text>
      </View>
    </View>
  );
};

export default FeedPost;
