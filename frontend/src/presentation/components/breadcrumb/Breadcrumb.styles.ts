import styled from 'styled-components';
import Link from 'next/link';

export const BreadcrumbNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
  overflow-x: hidden;
  padding: 2rem 0 1rem 0;
  border-bottom: solid 1px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-bottom: 2.5rem;
  margin-top: 0;
  font-family: 'Questrial', sans-serif;
`;

export const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #001f3f;
  transition: color 0.3s ease;
  font-family: 'Questrial', sans-serif;

  &:hover {
    text-decoration: underline;
    color: #003366;
  }
`;

export const BreadcrumbText = styled.span`
  color: #001f3f;
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: #dedede;
  font-family: 'Questrial', sans-serif;
`;
