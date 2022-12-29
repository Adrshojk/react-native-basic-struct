import React, { useState } from 'react';
import { COLOR, SIZE, FAMILY } from '@theme/typography';
import { Button, Radio, HStack, View } from 'native-base';
const RB = ({ variant = 'default', ...props }) => {
    const { style, checked, setValue, prefix, suffix, color, data, ...p } = props;
    p.onPress = () => {
        setValue && setValue(!checked);
    };
    return (
        <Radio.Group
            name="MyRadioGroup"
            accessibilityLabel="favorite number"
            value={checked}
            onChange={value => setValue(value)}>
            <HStack style={styles.radioContainer}>
                {data === undefined || data === ""
                    ? null
                    : data.content.map(item => {
                        return (
                            <View style={{ marginRight: 10,paddingVertical:10 }}>
                                <Radio colorScheme="primary" size={4} value={item.id} my={1}>
                                    {item.name}
                                </Radio>
                            </View>
                        );
                    })}
            </HStack>
        </Radio.Group>
    );
};
const styles = {
    radioContainer: {
        marginHorizontal: 20
    },
};
export default RB;