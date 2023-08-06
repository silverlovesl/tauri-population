import { ComponentCommonProps } from '@/models';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import React from 'react';

type Props = {} & ComponentCommonProps;

export const ChinaPage: React.FC<Props> = ({ className = '' }) => {
  return (
    <section className={`${className}`}>
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Total Population" value={'1,425,671,352'} precision={2} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Yearly % Change" value={-0.02} precision={2} suffix="%" valueStyle={{ color: '#3f8600' }} prefix={<ArrowDownOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Fertility Rate" value={'1.19'} suffix="%" />
          </Card>
        </Col>
      </Row>
    </section>
  );
};
