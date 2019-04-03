import moment from 'moment';

// Class to convert Tidepool input data into intermediate Tidepool-like format

function TidepoolDataProcessor () {

   function convertRecordToIntermediate(r) {
      return r;
   }

   function convertIntermediateToTidepool(r) {
      return r;
   }

   // Convert records to intermediate format
   TidepoolDataProcessor.importRecords = function (input, options) {

      let r = [];
      input.forEach(function (e) {
         r.push(convertRecordToIntermediate(e));
      });

      return r;

   };

   // Convert records to intermediate format
   TidepoolDataProcessor.exportRecords = function (input, options) {

      let r = [];
      input.forEach(function (e) {
         r.push(convertIntermediateToTidepool(e));
      });
      return r;

   };

   return TidepoolDataProcessor;
}

export default TidepoolDataProcessor;