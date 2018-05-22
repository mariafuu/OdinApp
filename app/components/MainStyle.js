const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    flex:1,
    backgroundColor: '#e8f8fd'
  },
  newsView: {
    flex:1,
    backgroundColor: 'blue',
    padding:5
  },
  newsText: {
    color: 'white'
  },
  container1: {
    flex:2,
    flexDirection: 'row',
    backgroundColor: '#00CED1',
    justifyContent: 'space-between',
    borderColor: '#4682b4',
    borderRadius: 4,
    borderWidth: 6,
    marginLeft: 5,
    marginTop: 5,
    padding: 10
  },


  toolbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74d4f6'
  },
  toolbarFont: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default MainStyle;
