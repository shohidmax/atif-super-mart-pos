import React from 'react'; 
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer'; 

const styles = StyleSheet.create({
    page: {
      flexDirection: 'col',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });



const MyDoc = () => (
    
  <Document className="pdf">
    <Page size="A4">
        <div className='flex' style={StyleSheet.page}> 
                <View style={{'display':'flex'}}>
                    <Text>Section #1</Text>
                    <Text>Section #1</Text>
                    <Text>Section #1</Text>
                </View>
                <View style={{'display':'flex'}}>
                    <Text>Section #1</Text>
                    <Text>Section #1</Text>
                    <Text>Section #1</Text>
                </View>
               
                
        </div>
    </Page>
  </Document>
);


const DataPdf = () => {
let b = 1290;
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
    return (
        <div>
             
        <PDFDownloadLink document={<MyDoc />} fileName={`${b}fiile.pdf`}>
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
        </div>
    );
};

export default DataPdf;