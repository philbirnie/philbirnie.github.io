import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Table from "../components/table"
import Stats from "../components/stats"
import MonthlyStats from "../components/monthly-stats"

const IndexPage = () => (
	<Layout>
		<Helmet>
			<Helmet>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-XWHLHMT10F"></script>
				<script
					dangerouslySetInnerHTML={ {
						__html: `
											window.dataLayer = window.dataLayer || [];
											function gtag(){dataLayer.push(arguments);}
											gtag('js', new Date());
											gtag('config', 'G-XWHLHMT10F');
									`,
					} }
				/>
			</Helmet>
		</Helmet>
		<Seo title="Phil Birnie runs for 365 Days in a Row"/>
		<p>Starting on January 1, 2026, I will attempt to run for 365 days in a row and 1,250 miles.</p>
		<p><strong>This is my 2nd try at this. I completed a year-long streak in 2021 and wrote a </strong> <Link
			to="/running-summary-2021/">short post about my experience</Link>.</p>
		<h3>Rules:</h3>
		<ul>
			<li>Run at least 1 mile per day</li>
			<li>Runs than span midnight may count as both days.</li>
		</ul>
		<Stats/>
		<h3>Monthly Totals</h3>
		<MonthlyStats/>
		<Table/>
	</Layout>
)

export default IndexPage
