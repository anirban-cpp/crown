import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component{
/*  state = {
    loading: true
  };

  unscubscribeFromSnapshot = null;

  componentDidMount(){
  //  const { updateCollections } =this.props;
  //  const collectionRef = store.collection('collection');
    // fetch() method to get the data from firestore. We are not using this as the data is quited nested here.

    /*fetch('https://firestore.googleapis.com/v1/projects/crwn-db-a10f1/databases/(default)/documents/collection')
    .then(response => response.json())
    .then(collection => console.log(collection));*/

    // Promise based data fetch using get() which makes an API call to get the data associated with this collectionRef
    // to handle async data fetch

    /*collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    })*/

    //  Observable based data fetch

   /* this.unscubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });*/

  //}

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render(){
    const { match } = this.props;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);