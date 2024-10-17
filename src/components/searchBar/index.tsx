import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {FilterListIcon, MicIcon, SearchIcon} from '@assets/svgs';
import {SearchBarProps} from '@constants/types';
import styles from './styles';

const SearchBar: React.FC<SearchBarProps> = ({
  onSearchChange,
  onMicPress,
  onFilterPress,
}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    onSearchChange?.(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={handleSearchChange}
        />
        <TouchableOpacity style={styles.micButton} onPress={onMicPress}>
          <MicIcon />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <FilterListIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
