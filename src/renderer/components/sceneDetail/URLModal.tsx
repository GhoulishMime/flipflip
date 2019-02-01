import * as React from 'react'
import Modal from "../ui/Modal";
import GooninatorImporter from './GooninatorImporter';

export default class URLModal extends React.Component {
  readonly props: {
    onClose(): void,
    addSources(sources: Array<string>): void,
    onChangeTextKind(kind: string) : void,
    onChangeTextSource(hbID: string) : void,
  };

  render() {
    return (
      <Modal onClose={this.props.onClose} title="Import URL">
        <GooninatorImporter
            onDidImport={this.props.onClose}
            addSources={this.props.addSources}
            onChangeTextKind={this.props.onChangeTextKind}
            onChangeTextSource={this.props.onChangeTextSource} />
      </Modal>
    );
  }
}

