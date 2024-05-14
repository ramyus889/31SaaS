"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function Home() {
  return (
    <div className="">
      <div className="flex text-center place-content-center container px-5 max-[1000px]:mt-[80px] mt-[217px]">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <h2 className="sm:text-3xl md:text-6xl text-3xl leading-[1.1] font-bold">
              Build Yourself?
            </h2>
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 ">
              Sure you can, but...
            </p>
          </div>

          <Table
            removeWrapper
            selectionMode="single"
            bottomContent="And occasionally, despite the best efforts, the outcome may fall short of expectations."
            aria-label="Example static collection table"
            className="text-start "
          >
            <TableHeader>
              <TableColumn>Task</TableColumn>
              <TableColumn>Hire Developer</TableColumn>
              <TableColumn>Develop Yourself</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1" className="border-b border-slate-800">
                <TableCell>Authentication system</TableCell>
                <TableCell className="text-muted-foreground">
                  $150 - $540
                </TableCell>
                <TableCell className="text-muted-foreground">
                  7.24 hours
                </TableCell>
              </TableRow>
              <TableRow key="2" className="border-b border-slate-800">
                <TableCell>Payment processor integration</TableCell>
                <TableCell className="text-muted-foreground">
                  $500 - $2,100
                </TableCell>
                <TableCell className="text-muted-foreground">
                  9.59 hours
                </TableCell>
              </TableRow>
              <TableRow key="3" className="border-b border-slate-800">
                <TableCell>SaaS blog setup</TableCell>
                <TableCell className="text-muted-foreground">
                  $1,000 - $2,100
                </TableCell>
                <TableCell className="text-muted-foreground">
                  14.62 hours
                </TableCell>
              </TableRow>
              <TableRow key="4" className="border-b border-slate-800">
                <TableCell>Email integration</TableCell>
                <TableCell className="text-muted-foreground">
                  $75 - $100
                </TableCell>
                <TableCell className="text-muted-foreground">1 hour</TableCell>
              </TableRow>
              <TableRow key="5" className="border-b border-slate-800">
                <TableCell>Database integration</TableCell>
                <TableCell className="text-muted-foreground">
                  $240 - $510
                </TableCell>
                <TableCell className="text-muted-foreground">
                  2.4 hours
                </TableCell>
              </TableRow>
              <TableRow key="6" className="border-b border-slate-800">
                <TableCell>Query retrieval optimization</TableCell>
                <TableCell className="text-muted-foreground">
                  $310 - $1,250
                </TableCell>
                <TableCell className="text-muted-foreground">
                  7.6 hours
                </TableCell>
              </TableRow>
              <TableRow key="7" className="border-b border-slate-800">
                <TableCell>This does not make sense glitches</TableCell>
                <TableCell className="text-muted-foreground">
                  $0. May be neglected until you <br /> discover it too late.
                </TableCell>
                <TableCell className="text-muted-foreground">
                  9 - 999 hours
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
