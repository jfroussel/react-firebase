import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import firebase from 'firebase';
import Papa from 'papaparse';

class Imports extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title: 'Welcome to the imports page ...'

        };

        this.updateData = this
            .updateData
            .bind(this);
        this.importInFirebase = this
            .importInFirebase
            .bind(this);
    }

    removeCompanies() {
        const companies = firebase
            .database()
            .ref('companies')
            .remove();
    }

    componentWillMount() {

        var csvFilePath = require("../../data/data.csv");
        Papa.parse(csvFilePath, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: this.updateData
        });
    }

    updateData(result) {
        const data = result.data;
        this.setState({data});
        this.importInFirebase(data);
        
    }

    importInFirebase(data) {

        firebase
            .database()
            .ref('companies')
            .set(data)
            .key;

    }

    render() {
        const data = [

            'SIREN',
            'NIC',
            'L1_NORMALISEE',
            'L2_NORMALISEE',
            'L3_NORMALISEE',
            'L4_NORMALISEE',
            'L5_NORMALISEE',
            'L6_NORMALISEE',
            'L7_NORMALISEE',
            'L1_DECLAREE',
            'L2_DECLAREE',
            'L3_DECLAREE',
            'L4_DECLAREE',
            'L5_DECLAREE',
            'L6_DECLAREE',
            'L7_DECLAREE',
            'NUMVOIE',
            'INDREP',
            'TYPVOIE',
            'LIBVOIE',
            'CODPOS',
            'CEDEX',
            'RPET',
            'LIBREG',
            'DEPET',
            'ARRONET',
            'CTONET',
            'COMET',
            'LIBCOM',
            'DU',
            'TU',
            'UU',
            'EPCI',
            'TCD',
            'ZEMET',
            'SIEGE',
            'ENSEIGNE',
            'IND_PUBLIPO',
            'DIFFCOM',
            'AMINTRET',
            'NATETAB',
            'LIBNATETAB',
            'APET700',
            'LIBAPET',
            'DAPET',
            'TEFET',
            'LIBTEFET',
            'EFETCENT',
            'DEFET',
            'ORIGINE',
            'DCRET',
            'DDEBACT',
            'ACTIVNAT',
            'LIEUACT',
            'ACTISURF',
            'SAISONAT',
            'MODET',
            'PRODET',
            'PRODPART',
            'AUXILT',
            'NOMEN_LONG',
            'SIGLE',
            'NOM',
            'PRENOM',
            'CIVILITE',
            'RNA',
            'NICSIEGE',
            'RPEN',
            'DEPCOMEN',
            'ADR_MAIL',
            'NJ',
            'LIBNJ',
            'APEN700',
            'LIBAPEN',
            'DAPEN',
            'APRM',
            'ESS',
            'DATEESS',
            'TEFEN',
            'LIBTEFEN',
            'EFENCENT',
            'DEFEN',
            'CATEGORIE',
            'DCREN',
            'AMINTREN',
            'MONOACT',
            'MODEN',
            'PRODEN',
            'ESAANN',
            'TCA',
            'ESAAPEN',
            'ESASEC1N',
            'ESASEC2N',
            'ESASEC3N',
            'ESASEC4N',
            'VMAJ',
            'VMAJ1',
            'VMAJ2',
            'VMAJ3',
            'DATEMAJ',
            'EVE',
            'DATEVE',
            'TYPCREH',
            'DREACTET',
            'DREACTEN',
            'MADRESSE',
            'MENSEIGNE',
            'MAPET',
            'MPRODET',
            'MAUXILT',
            'MNOMEN',
            'MSIGLE',
            'MNICSIEGE',
            'MNJ',
            'MAPEN',
            'MPRODEN',
            'SIRETPS',
            'TEL'
        ]

        return (
            <div className="container-fluid">
                <h3>{this.state.title}</h3>
                <hr/>
                <Button bsStyle="danger" onClick={this.removeCompanies}>Flush database companies</Button>
                <hr/>

            </div>

        )
    }
}

export default Imports;