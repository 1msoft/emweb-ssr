import { withRouter } from 'next/router';
import Link from 'next/link';
import { Breadcrumb } from '@1msoft/kant-ui';

const component = withRouter((props) => {
  return (
    <Breadcrumb
      breadcrumbProps={{ separator: "/" }}
      targetItemClass ="next-breadcrumb"
      itemRender={({ path, text }) => <Link href={path}>{text}</Link>}
      breadcrumbs={[]} />
  );
});

export default component;
