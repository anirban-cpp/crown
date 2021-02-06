import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { store, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import  { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  state = {
    loading: true
  };

  unscubscribeFromSnapshot = null;

  componentDidMount(){
    const { updateCollections } =this.props;
    const collectionRef = store.collection('collection');
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

    this.unscubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render(){
    const {match} = this.props;
    const { loading } = this.state;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);