
import {Card, Table} from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function TestsList() {
  return (
    <Card>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Test Name</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>
              <Link to="sync_test">Sync Test</Link>
            </Table.RowHeaderCell>
          </Table.Row>

        </Table.Body>
      </Table.Root>
    </Card>
  );
}

export default TestsList;