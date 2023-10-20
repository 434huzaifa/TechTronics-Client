import { Footer } from 'flowbite-react';
const Footer2 = () => {
    return (
        <Footer container className='mt-auto'>
        <div className="w-full">
          <div className="w-full justify-between  sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              alt="Techtronics Logo"
              href="/"
              name="Techtronics"
              src="/laptop.png"
            />
            <Footer.LinkGroup className='flex justify-between'>
              <Footer.Link href="#">
                About
              </Footer.Link>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Licensing
              </Footer.Link>
              <Footer.Link href="#">
                Contact
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            by="Techtronics"
            href="/"
            year={2022}
          />
        </div>
      </Footer>
    );
};

export default Footer2;