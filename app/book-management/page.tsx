import PageLayout from '@/components/layout';
import { withAuth } from '@/lib/withAuth'


const page = async() => {
  await withAuth();
  return (
    <PageLayout>
      <div>page</div>
    </PageLayout>
  )
}

export default page