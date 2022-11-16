import { FC } from "react";
import { Card, Pagination } from "react-bootstrap";

type Props = {
  total: number;
  current: number;
  onChangePage: (page: number) => void;
};

const PaginationMovie: FC<Props> = ({ total, current, onChangePage }) => {
  return (
    <Card className="mt-3 border-0 ">
      <Pagination>
        <Pagination.First onClick={() => onChangePage(1)} />
        <Pagination.Prev onClick={() => onChangePage(current - 1)} />
        <Pagination.Item onClick={() => onChangePage(current - 1)}>
          {current - 1}
        </Pagination.Item>
        <Pagination.Item onClick={() => onChangePage(current - 2)}>
          {current - 2}
        </Pagination.Item>
        <Pagination.Item disabled>{current}</Pagination.Item>

        <Pagination.Item onClick={() => onChangePage(current + 1)}>
          {current + 1}
        </Pagination.Item>
        <Pagination.Item onClick={() => onChangePage(current + 2)}>
          {current + 2}
        </Pagination.Item>

        <Pagination.Next onClick={() => onChangePage(current + 1)} />
        <Pagination.Last onClick={() => onChangePage(total)} />
      </Pagination>
    </Card>
  );
};
export { PaginationMovie };
