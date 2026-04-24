import PageLayout from '@/components/layout';
import { withAuth } from '@/lib/withAuth'


const page = async() => {
  const user = await withAuth();
  return (
    <PageLayout>
      <div>page</div>
    </PageLayout>
  )
}

export default page