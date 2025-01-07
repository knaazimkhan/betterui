import { Metadata } from 'next';
import { Card, CardHeader, CardBody, CardFooter, CardImage } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Card Component',
  description: 'A versatile card component for displaying content in a contained format.',
};

export default function CardDocs() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Card Component</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Card</h2>
        <div className="grid gap-6">
          <Card>
            <CardBody>
              <p>A simple card with just body content.</p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Card with Header and Footer</h2>
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Card Title</h3>
          </CardHeader>
          <CardBody>
            <p>This card has a header and footer section.</p>
          </CardBody>
          <CardFooter className="flex justify-end">
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Card with Image</h2>
        <Card>
          <CardImage
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5"
            alt="Code on a computer screen"
          />
          <CardHeader>
            <h3 className="text-lg font-semibold">Featured Image Card</h3>
          </CardHeader>
          <CardBody>
            <p>A card that includes an image at the top.</p>
          </CardBody>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Card Variants</h2>
        <div className="grid gap-6">
          <Card variant="ghost" className="mb-4">
            <CardBody>
              <p>Ghost variant with subtle background</p>
            </CardBody>
          </Card>
          
          <Card border="none" shadow="lg" className="mb-4">
            <CardBody>
              <p>No border, large shadow</p>
            </CardBody>
          </Card>
          
          <Card shadow="none" className="mb-4">
            <CardBody>
              <p>Default border, no shadow</p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <pre className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-lg overflow-x-auto">
          <code>{`import { Card, CardHeader, CardBody, CardFooter, CardImage } from '@/components/ui/card';

// Basic card
<Card>
  <CardBody>
    <p>Card content</p>
  </CardBody>
</Card>

// Card with header and footer
<Card>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Card with image
<Card>
  <CardImage
    src="/image.jpg"
    alt="Card image"
  />
  <CardBody>
    <p>Card content</p>
  </CardBody>
</Card>

// Card variants
<Card variant="ghost">
  <CardBody>Ghost variant</CardBody>
</Card>

<Card border="none" shadow="lg">
  <CardBody>No border, large shadow</CardBody>
</Card>

<Card shadow="none">
  <CardBody>No shadow</CardBody>
</Card>`}</code>
        </pre>
      </section>
    </div>
  );
} 