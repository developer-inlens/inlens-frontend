import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  ScrollView,
} from 'react-native'
import {
  RecyclerListView,
  DataProvider,
  StickyContainer,
  BaseScrollView,
} from 'recyclerlistview'
class ExternalScrollView extends BaseScrollView {
  scrollTo = (...args) => {
    if (this._scrollViewRef) {
      this._scrollViewRef.scrollTo(...args)
    }
  }

  render() {
    return (
      <ScrollView
        {...this.props}
        ref={scrollView => {
          this._scrollViewRef = scrollView
        }}>
        {this.props.children}
      </ScrollView>
    )
  }
}

export default ExternalScrollView
